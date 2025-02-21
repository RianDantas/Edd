const items = []

function append(element) {
  items.push(element)
}

function insert(position, element) {
  if (position >= 0 && position <= items.length) {
    items.splice(position, 0, element)
    return true
  }
  return false
}

function remove(element) {
  const index = indexOf(element)
  if (index !== -1) {
    removeAt(index)
    return true
  }
  return false
}

function removeAt(position) {
  if (position >= 0 && position < items.length) {
    return items.splice(position, 1)[0]
  }
  return null
}

function indexOf(element) {
  return items.indexOf(element)
}

function isEmpty() {
  return items.length === 0
}

function size() {
  return items.length
}

function toString() {
  return items.join(", ")
}

function print() {
  console.log(toString())
}

function clear() {
  items.length = 0
}

append("Paulo")
append("Pedro")
append("Claudemir")
append("Luiz")
print()
remove("Claudemir")
removeAt(2)
console.log(indexOf("Paulo"))
console.log(isEmpty())
console.log(size())
insert(1, "José")
print()