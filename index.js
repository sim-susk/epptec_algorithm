
// Kontrola, zda funguje výpis do konzole:
console.log('funguju!');

// Vložte náhodné pole čísel:
const numbers = [ -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5];
    
    
    
    // 1.
        // Vypíšou se na výstupu pouze sudá čísla z pole:
        for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
        //console.log(numbers[i]);
        };
        };

    // 2. 
        // Vypíšou se na výstupu pouze lichá čísla z pole:
        for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 < 0 || numbers[i] % 2 > 0) {
        //console.log(numbers[i]);
        };
        };

    // 3.
        // Vypíšou se na výstupu pouze záporná čísla z pole:
        for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
        //console.log(numbers[i]);
        };
        };

    // 4.
        // Vypíšou se na výstupu pouze kladná čísla z pole:
        for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
        //console.log(numbers[i]);
        };
        };

    // 5.    
        // Spočítá se součet všech čísel v poli:
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        };
        //console.log(sum);

    // 6.    
        // Spočítá se průměr čísel v poli:
        let sum1 = 0;
        let countNumber = numbers.length - 1;
        for (let i = 0; i < numbers.length; i++) {
        sum1 += numbers[i];
        };
        let average = Math.round(sum1 / countNumber);
        //console.log(average);

    // 7.
        // Vypíšou se na výstupu druhé mocniny všech čísel z pole:
        for (let i = 0; i < numbers.length; i++) {
        //console.log(numbers[i] ** 2);
        };

    // 8.
        // Vypíše se na výstupu nejvyšší hodnota z pole:
        let n = numbers[0];
        for (let i = 1; i < numbers.length; i += 1) {
        if (numbers[i] > n) {
        n = numbers[i];
        }
        };
        //console.log(n);

    // 9.
        // Vypíše se na výstupu nejnižší hodnota z pole:
        let n1 = numbers[0];
        for (let i = 1; i < numbers.length; i += 1) {
        if (numbers[i] < n1) {
        n1 = numbers[i];
        }
        };
        //console.log(n1);

