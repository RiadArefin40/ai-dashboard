// Sample data for different periods
const DATA = {
  today: {
    totalSales: {
      value: '$24,780',
      change: 18.4,
      guest: '$12,390',
      logged: '$12,390'
    },
    newUsers: {
      value: '1,245',
      change: 15.6,
      guest: '645',
      logged: '600'
    },
    cartAbandonment: {
      value: '24.8%',
      change: 2.1,
    },
    deliveries: {
      value: '3.5h',
      change: 5.4,
      total: '2,450',
      onTime: '92%'
    },
    salesChart: {
      labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
      sales: [30, 40, 60, 35, 40, 35, 60, 70],
      orders: [25, 35, 50, 30, 35, 30, 50, 60],
    },
    countriesChart: {
      labels: ['Saudi Arabia', 'UAE', 'Kuwait', 'Indonesia', 'Bangladesh'],
      totalUsers: [800, 400, 700, 800, 500],
      loggedUsers: [400, 300, 350, 400, 250],
    }
  },
  week: {
    totalSales: {
      value: '$168,450',
      change: 22.1,
      guest: '$82,350',
      logged: '$86,100'
    },
    newUsers: {
      value: '8,560',
      change: 12.8,
      guest: '4,120',
      logged: '4,440'
    },
    cartAbandonment: {
      value: '22.4%',
      change: -1.5,
    },
    deliveries: {
      value: '4.2h',
      change: -2.8,
      total: '16,780',
      onTime: '88%'
    },
    salesChart: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      sales: [150, 230, 180, 290, 200, 280, 250],
      orders: [120, 180, 150, 240, 180, 260, 210],
    },
    countriesChart: {
      labels: ['Saudi Arabia', 'UAE', 'Kuwait', 'Indonesia', 'Bangladesh'],
      totalUsers: [1200, 800, 900, 1000, 700],
      loggedUsers: [800, 600, 700, 800, 500],
    }
  },
  month: {
    totalSales: {
      value: '$720,840',
      change: 25.6,
      guest: '$350,420',
      logged: '$370,420'
    },
    newUsers: {
      value: '35,240',
      change: 28.4,
      guest: '17,120',
      logged: '18,120'
    },
    cartAbandonment: {
      value: '20.2%',
      change: -4.2,
    },
    deliveries: {
      value: '3.8h',
      change: 1.2,
      total: '68,450',
      onTime: '94%'
    },
    salesChart: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      sales: [980, 1200, 1100, 1500],
      orders: [880, 1000, 950, 1300],
    },
    countriesChart: {
      labels: ['Saudi Arabia', 'UAE', 'Kuwait', 'Indonesia', 'Bangladesh'],
      totalUsers: [2500, 1800, 2100, 2300, 1600],
      loggedUsers: [1800, 1200, 1600, 1700, 1100],
    }
  }
}

export function getDashboardData(dateRange: { from: Date; to: Date }) {
  // Initialize with default data in case nothing matches
  let data = DATA.today;

  const today = new Date()
  const isToday = dateRange.from.toDateString() === today.toDateString()
  
  const weekStart = new Date(today)
  weekStart.setDate(today.getDate() - today.getDay())
  const isThisWeek = dateRange.from.toDateString() === weekStart.toDateString()
  
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
  const isThisMonth = dateRange.from.toDateString() === monthStart.toDateString()

  if (isToday) data = DATA.today
  if (isThisWeek) data = DATA.week
  if (isThisMonth) data = DATA.month

  return data
} 