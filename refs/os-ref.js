import os from 'os'

export function osExample () {
  console.log('Platform', os.platform());

  console.log('Architecture', os.arch());

  console.log('CPU', os.cpus());

  console.log('Free Memory', os.freemem());

  console.log('Total Memory', os.totalmem());

  console.log('Home Directory', os.homedir());

  console.log('Work Time (min)', os.uptime()/1000/60);
}
