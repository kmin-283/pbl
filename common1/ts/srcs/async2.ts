(function() {
    const sum = (v: number[]): number => {
      return v.reduce((prev, curr) => prev + curr);
    }
    
    const oneThrids = (v: number[]): Promise<number> => {
      const lowerHalf = v.slice(0, v.length/3);
      return new Promise((resolve) => {
        resolve(sum(lowerHalf));
        console.log('oneThirds 종료');
      })
    };
    
    const twoThrids = (v: number[]): Promise<number> => {
      const upperHalf = v.slice(v.length/3, v.length);
      return new Promise((resolve) => {
        resolve(sum(upperHalf));
        console.log('twoThirds 종료');
      })
    };
    
    const asyncFunc = async (v: number[]): Promise<void> => {
      let t1 = performance.now();
      const res = await Promise.all([oneThrids(v), twoThrids(v)])
      console.log(res.reduce((prev, curr) => prev+curr));
      console.log(`수행시간: ${performance.now()-t1}`);
    }
    
    const syncFunc = (v: number[]) => {
      let t1 = performance.now();
      console.log(v.reduce((prev, curr) => prev+curr));
      console.log(`수행시간: ${performance.now()-t1}`);
    }
    
    const v: number[] = [];
    
    for (let i=0; i<10000000; i++) {
      v.push(i+1);
    }
    
    asyncFunc(v);
    syncFunc(v);
  })();