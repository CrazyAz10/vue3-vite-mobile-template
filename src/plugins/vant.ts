
import { Button, Calendar, Cell, ConfigProvider, Icon, Pagination, Toast, Space  } from 'vant'
export default function useVant(app:any) {
    app.use(Button)
    app.use(Calendar)
    app.use(Cell)
    app.use(ConfigProvider)
    app.use(Icon)
    app.use(Pagination)
    app.use(Toast)
    app.use(Space)
}