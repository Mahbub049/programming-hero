function minArray(heights){
    let height = heights[0];
    for(const min of heights){
        if(min<height){
            height = min;
        }
    }
    return height;
}

const heights = [60, 65, 76, 56, 67, 78, 76, 64, 74];
console.log(minArray(heights));