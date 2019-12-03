import fs from 'fs'
const fp = fs.promises
import path from 'path'

(async () => {
  const calcFuelMass = (currentMass: number): number => {
    const nextFuelMass = Math.floor(currentMass / 3) - 2
    return nextFuelMass < 0 ? 0 : nextFuelMass + calcFuelMass(nextFuelMass)
  }
  try {
    const inputData = await fp.readFile(path.join(__dirname, './day1input'), { encoding: 'utf8' })
    const input = inputData.split('\n') // don't love ingesting data like this but the input was small so this is okay
    const total = input.reduce((acc, mass) => {
      // return acc + Math.floor(Number.parseInt(mass) / 3) - 2 // Part 1
      return acc + calcFuelMass(Number.parseInt(mass)) // Part 2
    }, 0)
    console.log(`Total sum: ${total}`)
  } catch (err) {
    console.error(err)
  }
})()