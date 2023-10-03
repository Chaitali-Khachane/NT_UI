#!/bin/bash

appName="xps-demo-application"
artifactID="xps-demo-application"
host="xps-demo-application"
instances="1"
org="channel-management"
space="platform-services"
tla="xps"

default_versionID=1.0

[[ -z "$bamboo_releaseLabel" ]] && echo "You did not set \$bamboo_releaseLabel env Var, setting to: $default_versionID"; versionID=$default_versionID;

versionID="$bamboo_releaseLabel"

default_instances=1;
default_cf_caramel_endpoint=https://caramel.run.system.pcf.ntrs.com/api/deploy

[[ -z "$cf_caramel_endpoint" ]] && echo "You did not set the \$cf_caramel_endpoint variable defaulting to: $default_cf_caramel_endpoint"; CF_CARAMEL_ENDPOINT=$default_cf_caramel_endpoint;
[[ -z "$instances" ]] && echo "You did not set \$instances env Var, setting to: $default_instances"; INSTANCES=$default_instances;

json="{\"tla\":\"${tla}\",\"org\":\"${org}\",\"space\":\"${space}\",\"appName\":\"${appName}\",\"versionID\":\"${versionID}\",\"artifactID\":\"${artifactID}\",\"host\":\"${host}\",\"instances\":\"${instances}\"}"

response=`curl -u "${NEXUSUSER}:${NEXUSPASS}" -H "Content-Type: application/json" -X POST -d ${json} ${CF_CARAMEL_ENDPOINT}`

status=`echo $response | sed -e 's/^.*"status"[ ]*:[ ]*"//' -e 's/".*//' | tr -d '[:space:]'`
runId=`echo $response | sed -e 's/^.*"runId"[ ]*:[ ]*"//' -e 's/".*//' | tr -d '[:space:]'`

# echo $response
# echo $status $runId

while [[ "${status}" == "RUNNING" ]]
do
    response=`curl -sS -u "${NEXUSUSER}:${NEXUSPASS}" https://caramel.run.system.pcf.ntrs.com/api/waitfor/${runId}`
    status=`echo $response | sed -e 's/^.*"status"[ ]*:[ ]*"//' -e 's/".*//' | tr -d '[:space:]'`
    echo $status $runId
done

echo $response | sed -e 's/^.*"stdout"[ ]*:[ ]*"//' -e 's/".*//' -e 's/\\n/\n/g'

if [[ "${status}" == "SUCCESS" ]]; then
   echo "Deployed successfully"
   exit 0
else
   echo "Deployment failed"
   exit 1
 fi