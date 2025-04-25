// класс для узла двусвязного списка
class Node{
    constructor(text) {
        this.value = text;
        this.prev = null;
        this.next = null;
    }
}

// класс для двусвязного списка
class First{
    constructor(head = null) {
        this.head = head;
        this.tail = null;
    }

    // метод добавления элемента в конец
    add(value){
        const a = new Node(value);

        if (!this.head || !this.tail) {
            this.head = a;
            this.tail = a;

            return this;
        }

        a.prev = this.tail;
        this.tail.next = a;

        this.tail = a;
    }

    // вывод списка
    printList(){
        let nowNone = list1.head;
        while (nowNone){
            console.log(nowNone.value);
            nowNone = nowNone.next;
        }
    }
}

// заполняем список
let list1 = new First().add(10);
list1.add(22);
list1.add(3);
list1.add(4);
list1.add(6);
list1.add(234);
list1.add(55);
list1.add(6);
list1.printList();
console.log("------------");

// n - заданное значение после которого удаляются элементы
let n = 3;
//находим элемент с заданым значением
let count = 0;
let nowNone = list1.head;
while (nowNone){
    if (nowNone.value === n){
        count++;
    }
    if(count > 0){
        // чистим память
        delete nowNone.next;
        delete nowNone.prev;
    }
    nowNone = nowNone.next;
}

// выводим результат
list1.printList();

// Создаём встроенный список и заполняем его такими же значениями
console.log("+++++++");
let testList = new Map();
testList.set('1', 10);
testList.set('2', 22);
testList.set('3', 3);
testList.set('4', 4);
testList.set('5', 6);
testList.set('6', 234);
testList.set('7', 55);

// ищем нужный элемент
let countTest = 0;
for(let item of testList.keys()){
    if(countTest > 0){
        testList.delete(item);
    }
    if (testList.get(item) === n){
        countTest++;
    }
}

// выводим редактированный список
for(let val of testList.values()){
    console.log(val);
}

