import React, { useEffect } from 'react';
import { Header, Logo } from '@nt/dds-react';
import { DropdownMenu, MenuItem, MenuDivider } from '@nt/dds-react/core/DropdownMenu';
import data from '../data/header.json'

import '../../icon/user_profile2.jpg'

function AppHeader() {

    return <>
        <Header
            NavDrawerRootAppElement="#app, #root"
            appTitle="Research Workspace"

            contentComponent={() => {
                return <DropdownMenu
                    buttonAriaLabel="dsfwsDf"
                    buttonIcon={<img src="../../icon/user_profile2.jpg" alt="User Profile" class="circle-image" />}
                    buttonIconName="person"
                    buttonKind="borderless"
                    buttonSize="large"
                    buttonText={<img src="../../icon/user_profile5.jpg" style={{ width: "40px", borderRadius: "50%" }} alt="User Profile" class="circle-image" />}
                >
                    <MenuDivider />
                    <MenuItem
                        className="userImageDisplay"
                        onClick={function noRefCheck() { }}
                        text="Sign Out"
                    />
                    {/* <MenuItem
                        onClick={function noRefCheck() { }}
                        text="Item 2"
                    />
                    <MenuItem
                        onClick={function noRefCheck() { }}
                        text="Item 3"
                    >
                        <MenuItem
                            onClick={function noRefCheck() { }}
                            text="Sub Item 1"
                        />
                        <MenuItem
                            onClick={function noRefCheck() { }}
                            text="Sub Item 2"
                        />
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                        iconName="delete"
                        onClick={function noRefCheck() { }}
                        text="Delete"
                    /> */}
                </DropdownMenu>
            }
            }
            displayUtilityBar={false}
            fullWidth
            height={72}
            logoType="double"
            navLinks={<nav>
                <item name='Workspace' href='/'>
                    {data.header.map((value) => {
                        return <item href={value.path} id={value.id} name={value.label} />
                    })}
                </item>
                <item name='Infrastructure' href='/about' />
            </nav>}
            // navLinks={<nav>{data.header.map((value) => {
            //        return <item  href={value.path} id={value.id} name={value.label} />
            // })}</nav>}
            navTheme="dark"
            theme="dark"

        />
    </>
}
export default AppHeader