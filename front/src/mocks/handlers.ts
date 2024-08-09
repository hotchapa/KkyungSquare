import { http, HttpResponse, StrictResponse } from 'msw'
import { faker } from '@faker-js/faker'

function generateDate() {
  const lastWeek = new Date(Date.now())
  lastWeek.setDate(lastWeek.getDate() - 7)
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  })
}

const User = []
const Posts = []
const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms)
  })

export const handlers = []
