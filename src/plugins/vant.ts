
import { Button, Calendar, Cell, ConfigProvider, CellGroup, DropdownMenu, DropdownItem, Form, Field, Icon, Pagination, Popup, Picker, Toast, Space  } from 'vant'
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
    app.use(Pagination)
    app.use(Popup)
    app.use(Picker)
    app.use(Toast)
    app.use(Space)
}