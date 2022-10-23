import SuperTag from "~components/SuperTag";
import Link from "../../../Link";
import { LinkImage, LinkStyled, MenuDropdownItemStyle, MenuDropdownStyle, MenuItemStyle, MenuSocialStyle } from "./style";

export default function MenuItem({ label, link, social, dropdown }) {
    const hasChildren = (children) => children && children.length;

    return (
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
    )
}

// {hasChildren(item.dropdown) && (
//     <MenuItem
//       key={key}
//       {...dropdown}
//     />
//   )}