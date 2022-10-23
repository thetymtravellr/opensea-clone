import { MenuDropdownItemStyle, MenuDropdownStyle, MenuItemStyle } from "./style"
import Link from "../../../Link";

export default function MenuItem({label,link,key,dropdown}){
    const hasChildren = (children) => children && children.length;
    // console.log(label)
    return(
        <MenuItemStyle>
            {link && <Link href={link}>{label}</Link>}
            {dropdown?.length > 0 && <MenuDropdownStyle>
                {hasChildren(dropdown) && dropdown.map((drop,dropKey)=>{
                    // console.log(drop,dropdown)
                    return(
                        <MenuDropdownItemStyle>
                            {hasChildren(drop.dropdown) ? (
                                <Link href={drop.link}>
                                    <span>{drop.label}</span>
                                    (
                                        {`${drop.dropdown.length} ${
                                            drop.dropdown.length === 1 ? "child" : "children"
                                        }`}
                                    )
                                </Link>
                                ): (
                                    <Link href={drop.link}>
                                        <span>{drop.label}</span>
                                    </Link>
                                  ) }
                                {hasChildren(drop.dropdown) && (
                                    <MenuItem
                                    key={key}
                                    {...dropdown}
                                    />
                                )}
                        </MenuDropdownItemStyle>
                    )
                })}
           
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