class ListNode<T>{
    data: T;
    next:ListNode<T> | null;
    constructor(val:T, next?: ListNode<T> | null){
        this.data = val;
        this.next = next === undefined ? null : next;
    } 
}

class LinkedList<T>{
    head: ListNode<T> | null;
    size: number;
    constructor(){
        this.head = null;
        this.size = 0;
    }

    
    /**
     *
     * Converting the array to Linked List
     *
     */
    convertArrToLL(arr:T[]):ListNode<T>{
        let tail:ListNode<T>;
        for(let i=0; i<arr.length; i++){
            if(i==0){
                let node = new ListNode(arr[i]);
                this.head = node;
                tail = node;
                this.size = 1;
            }else{
                tail!.next = new ListNode(arr[i]);
                this.size++;
                tail = tail!.next;
            }
        }
        return this.head!;
    }

    
    /**
     *
     * Converting LL to Array
     *
     */
    convertLLToArr(head:ListNode<T> | null):T[]{
        let temp = head;
        let newArr = [];
        while(temp !== null){
            newArr.push(temp!.data);
            temp = temp!.next;
        }
        return newArr;
    }
    

    
    /**
     *
     * linked List Traversal
     *
     */
    listTraversal(arr:T[]):void{
        let ln = this.convertArrToLL(arr);
        let current = ln;
          
        while(current.next !== null){
            current = current.next;
        }
    }

    
    /**
     *
     * Length of Linked List
     *
     */
    lengthOfLinkedList(arr:T[]){
        let ll = this.convertArrToLL(arr);
        let current = ll;
        let cnt = 1;
        while(current.next !== null){
            current = current.next;
            cnt++;
        }
        return cnt;
    }
    
    
    /**
     *
     * remove head
     *
     */

    removeHead(head:ListNode<T>):ListNode<T> | null{
        if(head.next === null || head === null){
            return null;
        }
        
        head = head.next;
        this.size--;
        return head;

    }
    
    /**
     *
     * Remove Tail
     *
     */

    removeTail(head:ListNode<T>):ListNode<T> | null{
        if(head.next === null || head === null){
            return null;
        }
        let temp = head;
        while(temp.next && temp.next.next !== null){
            temp = temp.next;
        }
         
        temp.next = null;
        this.size--;
        return head;
    }

    
    /**
     *
     * Remove Kth Element
     *
     */
    removeK(head:ListNode<T>|null,k:number):ListNode<T>|null{
        
        if(head === null) return head;

        if(k==1){
            return head.next;
        }
        
        let cnt = 0;
        let temp:ListNode<T>|null = head;
        let prev = null;

        while(temp !== null){
            cnt++;
            if(cnt === k){
                if (prev !== null) {
                    prev.next = temp.next;
                }
            }
            prev = temp;
            temp = temp.next;
        }
        return head;
    }    
    
    // Remove an Element
    removeEl(head:ListNode<T>|null,el:number):ListNode<T>|null{
        if(head === null) return head;

        

        let temp:ListNode<T> | null = head;
        let prev = null;
        while(temp !== null){
            if(temp.data === el){
                if (prev !== null) {
                    prev.next = temp.next;
                }
                if(prev === null){
                    return temp.next;
                }
            }
            prev = temp;
            temp = temp.next;
        }
        return head;
    }


    /**
     *
     * Insertions in Linked List
     *
     */
    
    insertHead(head:ListNode<T>,val:T):ListNode<T>{
        return new ListNode(val, head);
    }

    insertTail(head:ListNode<T>,val:T){
        if(head === null){
            return new ListNode(val);
        }
        let temp = head;
        while(temp && temp.next !== null){
            temp = temp.next;
        }
        temp.next = new ListNode(val);
        return head;
    }
    
    insertk(head:ListNode<T>|null,val:T,k:number):ListNode<T>|null{
            
            if(head === null){
                if(k===1){
                    return new ListNode(val);  
                }
                return null;
            }

            if(k===1){
                return new ListNode(val,head);
            }

            let temp:ListNode<T> | null = head;
            let cnt = 0;
            while(temp!==null){
                cnt++;
                if(cnt === k-1){
                    let newNode = new ListNode(val,temp.next);
                    temp.next = newNode;
                    return head;
                }
                temp = temp!.next;
            }
            return head;
    }

    // insert an element 
    insertEl(head:ListNode<T>|null,val:T,el:number):ListNode<T>|null{
        if(head===null) return null;

        if(head.data === el){
            return new ListNode(val,head);
        }

        let temp:ListNode<T> | null = head;
        let prev = null;
        while(temp !== null){
            if(temp.data === el){
                let newNode = new ListNode(val);
                newNode.next = prev!.next;
                prev!.next = newNode;
                return head;
            }
            prev = temp;
            temp = temp.next;
        }
        return head;
    }
}

export default LinkedList;