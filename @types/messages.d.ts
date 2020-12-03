import Message from '~/@types/message'

interface Messages {
  list: Message[]
  all_record_count: number | null
  all_page_count: number | null
  exist_pre_page: boolean | null
  exist_next_page: boolean | null
  current_page_num: number | null
}

export default Messages
