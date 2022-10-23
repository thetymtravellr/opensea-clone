import Widget from "./style"

const WidgetRegular = ({icon,title,text,img}) => {
  return(<Widget>
          <Widget.Icon>
              {icon && icon}
              {img && <img src={img}/>}
          </Widget.Icon>
          <Widget.Body>
            <Widget.Title component="h3" variant="sm">
              {title}
            </Widget.Title>
            <Widget.Text component="p" variant="base">
              {text}
            </Widget.Text>
          </Widget.Body>
         </Widget>
   )
}

export default WidgetRegular