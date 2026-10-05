function hasTwoCubeSums(n) {
    const limit = Math.trunc(Math.cbrt(n)) + 1;

    let a = -1, b = -1;
    let c = -1, d = -1;

    for (let x = 1; x <= limit; x++)
    {
        for (let y = x; y <= limit; y++)
        {
            if (x * x * x + y * y * y === n)
            {
                if (a === -1)
                {
                    a = x;
                    b = y;
                } else if (c === -1
                           && x !== y && x !== a && x !== b
                           && y !== a && y !== b
                           && a !== b)
                {
                    c = x;
                    d = y;
                }
            }
        }
    }

    return c !== -1;
}