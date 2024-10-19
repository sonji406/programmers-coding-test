function solution(nums) {    
    const uniquePokemons = new Set(nums);
    const pickPokemons = nums.length/2;
    const answer = Math.min(uniquePokemons.size, pickPokemons);
    
    return answer;
}

// 최대한 많은 종류의 포켓몬을 포함해서 N/2마리를 선택