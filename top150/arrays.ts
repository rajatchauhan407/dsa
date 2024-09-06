class Top150Arrays{
    
    /**
     *
     * Merge Sorted Array (Pseudo Code)
     * 1. Initialize three pointers p1, p2, and p to point to the end of nums1, nums2, and the end of the merged array.
     * 2. While p1 and p2 are greater than or equal to 0:
     *    a. If nums1[p1] is greater than nums2[p2], assign nums1[p]   to nums1[p1] and decrement p1.
     *    b. Otherwise, assign nums1[p] to nums2[p2] and decrement p2.
     *    c. Decrement p.
     *    d. If p2 is greater than or equal to 0, assign the remaining elements of nums2 to nums1.
     */

    mergeSortedArray(nums1:number[], m:number, nums2:number[], n:number):void{
        let p1 = m-1;
        let p2 = n-1;
        let p = m+n-1;

        while(p1>=0 && p2>=0){
            if(nums1[p1] > nums2[p2]){
                nums1[p] = nums1[p1];
                p1 = p1-1;
            }else{
                nums1[p] = nums2[p2];
                p2 = p2-1;
            }
            p = p-1;
        }
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
        console.log(nums1)

    }

    
    /**
     *
     * Majority Element (Pseudo Code)
     *
     */
    majorityElement(nums: number[]): number {
        let candidate: number | null = null;
        let count = 0;
    
        for (let i = 0; i < nums.length; i++) {
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            } else if (nums[i] === candidate) {
                count++;
            } else {
                count--;
            }
        }
    
        return candidate!;
    }
    
    
    /**
     *
     * Pseudo code for Buying and selling stock
     *
     */
    
    
    maxProfit(prices: number[]): number {
        let min = prices[0];
        let maxDiff = 0;

        for(let i=0; i<prices.length-1; i++){
            if(prices[i+1]<min){
                min = prices[i+1]
            }else{
                
                let currentDiff = prices[i+1] - min;
                if(currentDiff > maxDiff){
                    maxDiff = currentDiff;
                }
            }
        }

        return maxDiff; 

    };
    

    
    /**
     *
     * find the last word count
     *
     */
    lengthOfLastWord(s: string): number {
        let lastWordCount = 0;
        for(let i=0; i<s.length;i++){
            if(s[i] === ' ' && s[i+1] !== ' ' && s[i+1]){
                lastWordCount = 0;
            }else if(s[i] !== ' '){
                lastWordCount++;
            }
        }
        return lastWordCount;
    };
    
    /**
     *
     * Longest Common Prefixes
     *
     */
    
    
    longestCommonPrefix(strs:string[]){
        let minLoopCount = Infinity;
        let prefix = '';
        let recentPrefix = '';

        if (strs.length === 0) return "";
        if (strs.length === 1) return strs[0];

        for(let i=0; i<strs.length; i++){
            if(strs[i].length < minLoopCount){
                minLoopCount = strs[i].length;
            }
        }
        
        for(let i=0; i<minLoopCount; i++){
            for(let j=0; j<strs.length-1; j++){
                recentPrefix = strs[j][i]
                if(strs[j][i] !== strs[j+1][i]){
                    return prefix;
                }
            }
            prefix = prefix + recentPrefix;
        }
        return prefix;
    }

    
    /**
     *
     * Is Valid Palindrome
     *
     */
    
    
    removeNonAlphanumeric(str:string) {
        return str.replace(/[^a-zA-Z0-9]/g, '');
    }

    isPalindrome(s: string): boolean {
        let newStr = this.removeNonAlphanumeric(s).toLowerCase();
        let i = 0;
        let j = newStr.length-1;
        while(i<Math.floor(newStr.length/2)){
            if(newStr[i] !== newStr[j]){
                return false
            }
            i++;
            j--;
        }
        return true;
    };

    
    /**
     *
     * IsSubsequence
     *
     */
    IsSubsequence(s: string, t: string):boolean{
        let p1 = 0;
        let p2 = 0;
        while(p1<s.length){
            if(s[p1] === t[p2]){
                p1++;
                p2++;
            }else{
                p2++;
            }
            if(p1>s.length-1){
                return true;
            }
            if(p2>t.length-1){
                return false;
            }
        }
        return true;
    }
    
    // trapping rainwater with O(3n) and space complexity O(n)

    trappingRainWater(arr:number[]):number{
        let leftMax = 0;
        let rightMax = 0;
        let prefixArr = [];
        let suffixArr = [];
        let total = 0;
        for(let i=0; i<arr.length;i++){
            if(leftMax > arr[i]){
                prefixArr.push(leftMax);
            }else{
                leftMax = arr[i]
                prefixArr.push(leftMax);
            }
        }
        for(let i=arr.length-1; i>=0;i--){
            if(rightMax > arr[i]){
                suffixArr[i] = rightMax;
            }else{
                rightMax = arr[i];
                suffixArr[i] = arr[i];
                
            }
        }
        console.log(prefixArr);
        console.log(suffixArr);

        for(let i=0; i<arr.length; i++){
            total = total + (Math.min(prefixArr[i],suffixArr[i]) - arr[i])
        }
        return total;
    }
    // Trapping Rain Water with time complexity O(n) and space complexity O(1)
    trappingRainWater2(height:number[]){
        let lMax=0;
        let rMax=0;
        let l = 0;
        let r = height.length - 1;
        let total=0;

        while(l<r){
            if(height[l] < height[r]){
                if(lMax > height[l]){
                    total += lMax - height[l]
                }else{
                    lMax = height[l];
                }
                l++;
            }else{
                if(rMax>height[r]){
                    total+=rMax - height[r];
                }else{
                    rMax = height[r];
                }
                r--;
            }
            
        }
        return total;
    }
    // Balanced Parenthesis

    isValid(s: string): boolean {
        let validPar = [];
            for(let i=0; i<s.length; i++){
                if(s[i] === '{' || s[i] === '(' || s[i] === '['){
                    validPar.push(s[i]);
                }else if(s[i] === '}' || s[i] === ')' || s[i] === ']'){
                    if(s[i] === '}' && validPar[validPar.length-1] === '{'){
                        validPar.pop();
                    }else if(s[i] === ']' && validPar[validPar.length-1] === '['){
                        validPar.pop();
                    }else if(s[i] === ')' && validPar[validPar.length-1] === '('){
                        validPar.pop();
                    }else{
                        return false;
                    }
                }
            }
            return validPar.length === 0 ? true :false
    };
    
    // Leaders in an array
    leadersArray(arr:number[]){
        let rMax = -Infinity;
        let cnt = 0;
        let newArr =[]
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i]>rMax){
                rMax = arr[i];
                cnt++;
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    // printing all the subarrays
    printingSubarrays<T>(arr:T[]){
        for(let k=0;k<arr.length;k++){
            for(let i=k;i<arr.length;i++){
                let subArray = [];
                for(let j=i;j<arr.length;j++){
                    subArray.push(arr[j]);
                }
                console.log(subArray)
            }
        }
    }

    // Max Sum of Sub arrays
    maxSubarray(arr:number[]){
        let maxi = -Infinity;
        for(let k=0;k<arr.length;k++){
            let sum = 0;
            for(let i=k;i<arr.length;i++){
                sum  = sum + arr[i];
                maxi = Math.max(sum,maxi);
            }
        }
        return maxi;
    }

    // Kadane's algo max subarray

    maxSubarrayKadane(arr:number[]){
        let maxi = -Infinity;
        let sum = 0;
        let start = 0;
        let ansStart = -1;
        let ansEnd = -1;
        for(let i=0; i<arr.length;i++){
            if(sum===0) start = i;
            sum = sum + arr[i];
            if(sum>maxi){
                maxi = sum;
                ansStart = start;
                ansEnd = i;
            }
            if(sum<0){
                sum=0;
            }
            
        }
        return maxi;
    }

    // Longest Consecutive Subsequence
    longestSubsequence(arr:number[]){
        let longest = 1;
        let lastSmaller = -Infinity;
        let cntCurrent = 0;

        const newArr = arr.sort((a,b)=>{return a-b});
        for(let i=0; i<newArr.length; i++){
            if(newArr[i] !== lastSmaller+1){
                lastSmaller = newArr[i];
                cntCurrent = 1;
            }
            if(newArr[i] === lastSmaller+1){
                lastSmaller=newArr[i];
                cntCurrent++;
            }
            
            if(cntCurrent>longest){
                longest = cntCurrent;
            }
        }
        return longest;
    }
    /*=============================================
    =            Hashmaps            =
    =============================================*/
    
    
    
    /*=====  End of Hashmaps  ======*/
    
    
}

export default Top150Arrays;