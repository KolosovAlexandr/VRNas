export type IConfigTestimonial = {
    id: string
    clientImg: string
    text: string
    name: string
    job: string
    active: boolean
    toggleClick: (id: IConfigTestimonial['id']) => void
  }