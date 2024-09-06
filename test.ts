import Top150 from "./top150/arrays.js";
import LinkedList from "./ds/ll/index.js";
import DoubleLinkedList from "./ds/dll/index.js";
class Test{
    linkedList(){
        return new LinkedList();
    }
    public static main(): void {
        console.log("Hello World");
        console.log("Hello World from API v1");
        // const ll = this.linkedList();
    }

    top150(){
        return new Top150();
    }

    
}

// const ll = new Test().linkedList();

// const head = ll.convertArrToLL([2,3,4,5]);

// const newLL = ll.removeHead(head);
// const newLL = ll.removeTail(head);
// const newLL = ll.removeK(head,3);
// const newLL = ll.removeEl(head,4);
// const newLL = ll.insertK(head,7,3);
// const ans = ll.convertLLToArr(newLL);

const top150 = new Test().top150();
// const ans = top150.trappingRainWater2([0,1,0,2,1,0,1,3,2,1,2,1]);
// const ans = top150.isValid("()");

const dll = new DoubleLinkedList();
const head = dll.arrToDll([2,3,5,7]);
// const ans = dll.deleteEl(head,5);
// const ans = dll.insertK(head,7,5)
const ans = dll.reverse(head);
dll.print(ans)

// const ans = dll.insertBeforeEl(head,20,7)
// const ans = top150.leadersArray([0])
// const ans = top150.longestSubsequence([1,3,8,9,6,90,4,0,5]);
// const ans = top150.printingSubarrays<number>([1,2,3,4,5,6])
// const ans = top150.maxSubarray([-2,-3,4,-1,-2,1,5,-3])   
//    const ans = top150.maxSubarrayKadane([-2,-3,4,-1,-2,1,5,-3]);


console.log(ans);

