
import { Button, Calendar, Cell, ConfigProvider, CellGroup, DropdownMenu, DropdownItem, Form, Field, Icon, Image, Pagination, Popup, Picker, Toast, Uploader, Space  } from 'vant'
export default function useVant(app:any) {
    app.use(Button)
    app.use(Calendar)
    app.use(Cell)
    app.use(ConfigProvider)
    app.use(CellGroup)
    app.use(DropdownMenu)
    app.use(DropdownItem)
    app.use(Form)
    app.use(Field)
    app.use(Icon)
    app.use(Image)
    app.use(Pagination)
    app.use(Popup)
    app.use(Picker)
    app.use(Toast)
    app.use(Uploader)
    app.use(Space)
}