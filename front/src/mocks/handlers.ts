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

const Posts = []
const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms)
  })
const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: faker.image.avatar() },
  { id: 'zerohch0', nickname: '제로초', image: faker.image.avatar() },
  { id: 'leoturtle', nickname: '레오', image: faker.image.avatar() },
]
export const handlers = [
  http.post('/api/account/sign-in', () => {
    console.log('로그인')
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    })
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃')
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),
  http.post('/api/account/sign-up', async ({ request }) => {
    console.log('회원가입')
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    })
  }),
]
