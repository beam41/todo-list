import { IBacklog } from "../Models/Backlog.Model"

class Cache {
    private data: IBacklog

    get = (_) => this.data
    save = (d) => this.data = d
}

export default new Cache()