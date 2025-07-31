function MergeSort(nums) {
    if(nums.length <= 1) return nums
    let mid = Math.floor(nums.length /2)
    const leftMerge = MergeSort(nums.slice(0, mid))
    const rightMerge = MergeSort(nums.slice(mid))

    return MergeSorted(leftMerge, rightMerge)
}

function MergeSorted(arr1, arr2) {
    let i=0, j= 0
    let result = []
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            i++
            result.push(arr1[i])
        }
        if(arr1[i] > arr2[j]) {
            j++
            result.push(arr2[j])
        }
    }
    
    return result
}