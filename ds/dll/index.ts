class DoubleListNode<T>{
    data:T;
    next:DoubleListNode<T>|null;
    back:DoubleListNode<T>|null;

    constructor(val:T,next?:DoubleListNode<T>|null,back?:DoubleListNode<T>|null){
        this.data = val;
        this.next = next || null;
        this.back = back || null;
    }
}

class DoubleLinkedList<T>{
    head:DoubleListNode<T> | null;
    size:number;

    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Converting an array to DLL 
    arrToDll(arr:T[]){
        if(arr.length === 0 ){
            return null;
        }
        this.head = new DoubleListNode(arr[0]);

        let prev = this.head;

        for(let i=1; i<arr.length;i++){
            let newNode = new DoubleListNode(arr[i],null,prev);
            prev.next = newNode;
            prev = newNode;
        }
        return this.head;
    }
    // Printing the doubly linked list
    print(head:DoubleListNode<T>|null){
        const newArr = [];
        while(head!==null){
            newArr.push(head.data);
            head = head.next;
        }
        console.log(newArr);
    }

    // insertions in DLL
    
    // 1. Inserting the head in DLL
    insertBeforeHead(head:DoubleListNode<T>|null,val:T):DoubleListNode<T>{
        this.head = head;
        if(this.head === null) return new DoubleListNode(val);
        let newNode = new DoubleListNode(val,head,null);
        this.head.back = newNode;
        this.head = newNode;
        return this.head;
    }

    //#region 2. Insert the tail in DLL
    insertBeforeTail(head:DoubleListNode<T>|null,val:T):DoubleListNode<T>|null{
        this.head = head;

        if(this.head === null){
            return new DoubleListNode(val);
        }

        if(this.head.next === null){
            let newNode = new DoubleListNode(val,this.head,null);
            this.head.back = newNode;
            this.head = newNode;
            return this.head;
        }

        let temp:DoubleListNode<T>|null = this.head;


        if(temp){
            while(temp.next!=null){
                temp = temp!.next;
            }
            let prev = temp!.back;
            let newNode = new DoubleListNode(val,temp,prev);
            temp.back = newNode;
            prev!.next = newNode;      
        }
        return this.head;
        
    }
    //#endregion Insertions end here 

    // Insert Kth element in DLL 
    insertBeforeK(head:DoubleListNode<T>|null,val:T,k:number){
        
        this.head = head;
        if(k==1){
            return this.insertBeforeHead(this.head,val);
        }
        let newNode = new DoubleListNode(val);
        
        let prev:DoubleListNode<T>|null = null;
        let temp:DoubleListNode<T>|null = this.head;
        let cnt = 0;
        while(temp !== null){
            cnt++;
            if(cnt == k){
                newNode.next = temp;
                temp.back = newNode;
                prev!.next = newNode;
                newNode.back = prev;
                break;
            }
            prev = temp;
            temp= temp!.next;
            
        }
        return this.head;
    }
    // insert before an element
    insertBeforeEl(head:DoubleListNode<T>|null,val:T,el:number){
        
        this.head = head;
        if(this.head === null) return null;
        if(this.head.data === el){
            return this.insertBeforeHead(this.head,val);
        }
        let newNode = new DoubleListNode(val);
        
        let prev:DoubleListNode<T>|null = null;
        let temp:DoubleListNode<T>|null = this.head;
        
        while(temp !== null){
            
            if(temp.data == el){
                newNode.next = temp;
                temp.back = newNode;
                prev!.next = newNode;
                newNode.back = prev;
                break;
            }
            prev = temp;
            temp= temp!.next;
            
        }
        return this.head;
    }

    // #region Deletions
    deleteHead(head:DoubleListNode<T> | null):DoubleListNode<T> | null{
        this.head = head;
        if(this.head === null || this.head.next === null){
            return null
        }
        let temp = this.head.next;
        temp.back = null;
        this.head.next = null;
        this.head = temp;
        return this.head;
    }

    deleteTail(head:DoubleListNode<T>|null):DoubleListNode<T>|null{
        this.head = head;
        if(this.head === null || this.head.next === null){
            return null;
        }
        let temp = this.head;
        while(temp.next !== null){
            temp = temp.next;
        }
        let prev = temp.back;
        if(prev){prev.next = null}
        return this.head;
    }
    deleteK(head:DoubleListNode<T>|null,k:number):DoubleListNode<T>|null{
        this.head = head;
        if(this.head===null){
            return null;
        }
        if(k==1){
            if(this.head.next === null)return null
            return this.deleteHead(head)
        }

        let cnt = 0;
        let temp:DoubleListNode<T> | null = this.head;
        while(temp && temp !== null){
            cnt++;
            if(cnt===k){
                let prev = temp.back;
                let front = temp.next;
                if(prev) prev.next = front;
                if(front) front.back = prev;
                break;
            }
            temp=temp.next;
        }
        return this.head;
    }
    deleteEl(head:DoubleListNode<T>|null,el:number):DoubleListNode<T>|null{
        this.head = head;
        if(this.head===null){
            return null;
        }
        if(this.head.data==el){
            if(this.head.next === null)return null
            return this.deleteHead(head)
        }

        
        let temp:DoubleListNode<T> | null = this.head;
        while(temp && temp !== null){
            
            if(temp.data === el){
                let prev = temp.back;
                let front = temp.next;
                if(prev) prev.next = front;
                if(front) front.back = prev;
                break;
            }
            temp=temp.next;
        }
        return this.head;
    }
    // #endregion Deletions End Here
    
    // #region Reversing a Double Linked List
    reverse(head:DoubleListNode<T> | null):DoubleListNode<T> | null{
        this.head = head;
        let current:DoubleListNode<T>|null = this.head;
        while(current !== null){
            if(current.next === null){
                this.head = current;
            }
            let last = current.back;
            current.back = current.next;
            let temp = current.next;
            current.next = last;
            current = temp;
        }
        return this.head;
    }
    // #endregion reversing
}
export default DoubleLinkedList;