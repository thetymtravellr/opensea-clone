import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Typography } from "@mui/material";
import { useRouter } from 'next/router';
import { LinkImage, MenuItemStyle, MenuItemStyled } from "./style";

const MenuItem = ({ label, index, icon, setMenu, subMenu, link, social, dropdown }) => {
    const router = useRouter();

    return (
        <MenuItemStyle onClick={() => {
            if (index) {
                setMenu(label.toLowerCase())
                // router.push(false)
                return <></>
            } else {
                router.push(link)
                return <></>
            }
        }}>

            {
                subMenu
                    ?
                    <MenuItemStyled>
                        {icon && <LinkImage>
                            <img src={icon} alt="" />
                        </LinkImage>}
                        <Typography variant="2xs" className='submenu-label'>
                            {label}
                        </Typography>
                    </MenuItemStyled>
                    : <MenuItemStyled href="/" onClick={(e) => {
                        e.preventDefault()
                        if (link) {
                            router.push(link)
                        }
                    }}>
                        <span>
                            {icon}
                        </span>
                        <Typography variant="base">
                            {label}
                        </Typography>
                        {
                            dropdown && <span className='chevron'>
                                <ChevronRightOutlinedIcon />
                            </span>
                        }
                    </MenuItemStyled>
            }
        </MenuItemStyle>
    )
}

export default MenuItem


/* 

<MenuItemStyle>
            {link && <Link href={link}>{label}</Link>}
            {dropdown?.length > 0 && <MenuDropdownStyle left="0">
                {hasChildren(dropdown) && dropdown.map((drop, dropKey) => {
                    // console.log(drop,dropdown)
                    return (
                        <MenuDropdownItemStyle key={dropKey}>
                            {hasChildren(drop.dropdown) ? (
                                <Link href={drop.link}>
                                    <span>{drop.label}</span>
                                    (
                                    {`${drop.dropdown.length} ${drop.dropdown.length === 1 ? "child" : "children"
                                        }`}
                                    )
                                </Link>
                            ) : (
                                <LinkStyled href={drop.link}>
                                    {drop.icon && (
                                        <LinkImage as={"span"}>
                                            <img src={drop.icon} alt="icon" />
                                        </LinkImage>
                                    )}
                                    <span>{drop.label}</span>
                                </LinkStyled>
                            )}
                            {hasChildren(drop.dropdown) && (
                                <MenuItem
                                    {...dropdown}
                                />
                            )}
                        </MenuDropdownItemStyle>
                    )
                })}
                {social &&
                    <MenuSocialStyle className="social-icons">
                        {
                            social.map((el, i) => (
                                <li>
                                    <Link href="/" className="social-links">
                                        <SuperTag value={el.icon} />
                                    </Link>
                                </li>
                            ))
                        }
                    </MenuSocialStyle>
                }
            </MenuDropdownStyle>}
        </MenuItemStyle>
*/