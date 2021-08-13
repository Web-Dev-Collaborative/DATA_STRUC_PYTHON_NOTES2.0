    left, right = 0, len(nums) - 1
    while left <= right:
          mid = left + (right - left) / 2
    if nums[mid] >= target:
                right = mid - 1
                return right
    else:
       left = mid + 1
       return left
