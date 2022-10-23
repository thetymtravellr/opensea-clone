import Widget from "./style"

const WidgetRegular = ({icon,title,text}) => {
  return(<Widget>
          <Widget.Icon>
              {icon}
          </Widget.Icon>
          <Widget.Title component="h3" variant="sm">
            {title}
          </Widget.Title>
          <Widget.Text component="p" variant="base">
            {text}
          </Widget.Text>
         </Widget>
   )
}

export default WidgetRegular