
const IP = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,13,23,1,23,10,27,1,13,27,31,2,31,10,35,1,35,9,39,1,39,13,43,1,13,43,47,1,47,13,51,1,13,51,55,1,5,55,59,2,10,59,63,1,9,63,67,1,6,67,71,2,71,13,75,2,75,13,79,1,79,9,83,2,83,10,87,1,9,87,91,1,6,91,95,1,95,10,99,1,99,13,103,1,13,103,107,2,13,107,111,1,111,9,115,2,115,10,119,1,119,5,123,1,123,2,127,1,127,5,0,99,2,14,0,0]

const Intcode = (IP: number[]) => {
  for (var i = 0; true; i+=4) {
    const opcode = IP[i]
    if (opcode === 1) {
      IP[IP[i + 3]] = IP[IP[i+1]] + IP[IP[i+2]]
    } else if (opcode === 2) {
      IP[IP[i + 3]] = IP[IP[i+1]] * IP[IP[i+2]]
    } else if (opcode === 99) {
      break
    } else {
      throw new Error('Invalid opcode reached')
    }
  }
  return IP
}

const c1_input = Array.from(IP)
c1_input[1] = 12
c1_input[2] = 2
const c1_output = Intcode(c1_input)
console.log(`c1: ${c1_output[0]}`)

let c2_input = Array.from(IP)
let c2_output, solved = false
for (var n = 0; !solved && n <= 99; n++) {
  for (var v = 0; !solved && v <= 99; v++) {
    c2_input = Array.from(IP)
    c2_input[1] = n
    c2_input[2] = v
    c2_output = Intcode(c2_input)
    if (c2_output[0] === 19690720) {
      solved = true
      console.log(`c2: ${100 * n + v}`)
    }
  }
}

