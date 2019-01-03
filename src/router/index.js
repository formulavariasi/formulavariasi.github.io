import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CarWash from '@/components/CarWash'
import AutoDetailing from '@/components/AutoDetailing'
import BookingForm from '@/components/BookingForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'root',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/CarWash',
      name: 'CarWash',
      component: CarWash
    },
    {
      path: '/AutoDetailing',
      name: 'AutoDetailing',
      component: AutoDetailing
    },
    {
      path: '/BookingForm',
      name: 'BookingForm',
      component: BookingForm
    },
  ]
})
