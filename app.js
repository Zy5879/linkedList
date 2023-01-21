const newNode = (data, next = null) => {
  return {
    data: data,
    next: next,
  };
};

const linkedList = () => {
  let head = null;
  let size = 0;
  return {
    prepend(data) {
      head = newNode(data, head);
      size++;
    },
    append(data) {
      let newnode = newNode(data);
      let current;
      if (!head) {
        head = newnode;
      } else {
        current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newnode;
      }
      size++;
    },
    getAtIndex(index) {
      let current = head;
      let count = 0;

      while (current) {
        if (count == index) {
          console.log(current.data);
        }
        current = current.next;
        count++;
      }
      return null;
    },
    insertAt(data, index) {
      // If index is out of range
      if (index < 0 || index > size) {
        return;
      }
      if (index == 0) {
        head = newNode(data, head);
        return;
      }
      const node = newNode(data);
      let current;
      let previous;

      current = head;
      let count = 0;

      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }

      node.next = current;
      previous.next = node;

      size++;
    },
    contains(data) {
      let current = head;
      let index = -1;
      while (current) {
        index++;
        if (current.data === data) {
          return index;
        }
        current = current.next;
      }
      return -1;
    },
    removeAtIndex(index) {
      if (index < 0 || index > size) {
        return;
      }
      let current = head;
      let previous;
      let count = 0;

      if (index == 0) {
        head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      size--;
    },
    grabTail() {
      let current = head;
      if (!current) {
        return null;
      }
      let node = head;
      while (node) {
        if (!node.next) {
          return node;
        }
        node = node.next;
      }
    },
    pop() {
      let current = head;
      if (!current) {
        return null;
      }
      let node = head;
      let tail = head.next;
      while (tail.next !== null) {
        node = tail;
        tail = tail.next;
      }
      node.next = null;
      size--;
      return head;
    },
    printLinkedList() {
      let current = head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    },
  };
};

const li = linkedList();
li.prepend(100);
li.prepend(300);
li.prepend(500);
li.append(200);
console.log(li.contains(500));
// li.pop();

// li.removeAtIndex(0);
li.printLinkedList();

// li.printLinkedList();
