<table style={{ width: "100%", marginBottom: "10px" }}>
<tr>
  <td style={{ width: `${100 / 5}%` }}></td>
 
  <td style={{ width: `${100 / 5}%` }}></td>
  <td style={{ width: `${100 / 5}%` }}></td>
  <td style={{ width: `${100 / 5}%` }}></td>
  <td style={{ width: `${100 / 5}%` }}></td>
</tr>
<tr>
  <td >
    <Card
      hover={false}
      noPadding={false}
      shadowSize="sm"

    >
      <div style={{ height: "50px" }}>
        <Icon
          ariaHidden
          name="person"
          type="info"
        />
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>Hello ABC XYZ, Welcome to Northern Trust</span> <br />

        {/* <span style={{ fontWeight: "500", marginLeft: "10px" }}>ABC XYZ</span> */}
      </div>

    </Card>
  </td>
  {/* <td></td> */}
  <td style={{ paddingLeft: "5px" }}>
    <Card
      hover={false}
      noPadding={false}
      shadowSize="sm"
    >
      <div style={{ height: "50px" }}>
        <Button
          danger={undefined}
          icon="only"
          iconName="domain"
          kind="primary"
          onClick={function noRefCheck() { }}
          size="small"
          type="button"
        />
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>Domain</span>
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>NA</span>
      </div>
    </Card>
  </td>
  <td style={{ paddingLeft: "5px" }}>
    <Card
      hover={false}
      noPadding={false}
      shadowSize="sm"
    >
      <div style={{ height: "50px" }}>
        <Button
          danger={undefined}
          icon="only"
          iconName="domain"
          kind="primary"
          onClick={function noRefCheck() { }}
          size="small"
          type="button"
        />
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>Entities</span>
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>NA</span>
      </div>

    </Card>
  </td>
  <td style={{ paddingLeft: "5px" }}>
    <Card
      hover={false}
      noPadding={false}
      shadowSize="sm"
    >
      <div style={{ height: "50px" }}>
        <Button
          danger={undefined}
          icon="only"
          iconName="settings"
          kind="primary"
          onClick={function noRefCheck() { }}
          size="small"
          type="button"
        />
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>Entity Succeeded</span>
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>15</span>
      </div>
    </Card>
  </td>
  <td style={{ paddingLeft: "5px" }}>
    <Card
      hover={false}
      noPadding={false}
      shadowSize="sm"
    >
      <div style={{ height: "50px" }}>
        <Button
          danger={true}
          disa
          icon="only"
          iconName="warning"
          kind="primary"
          onClick={function noRefCheck() { }}
          size="small"
          type="button"
        />
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>Entity Failed</span>
        <span style={{ fontWeight: "500", marginLeft: "10px" }}>15</span>
      </div>

    </Card>
  </td>
</tr>
</table>