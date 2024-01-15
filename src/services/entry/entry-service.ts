import getByUserId from './api/get-by-user-id'
import postEntry from './api/post-entry'
import getLastestEntries from './api/get-lastest-entries'

const EntryService = {
  postEntry,
  getByUserId,
  getLastestEntries,
}

export default EntryService
