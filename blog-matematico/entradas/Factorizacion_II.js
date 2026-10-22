contenidoEntrada = `
<section>
    <h2>Factorización II</h2>
    <p>Continuando con la factorización, aquí veremos casos más complejos y cómo aplicarlos.</p>

    <h3>Suma y Diferencia de Cubos</h3>
        <p><strong>Cómo reconocerlo:</strong> Para reconocer una suma o diferencia de cubos, debes comprobar si el primer y segundo términos tienen raíces cúbicas exactas o que solo sea un binomio</p>
        
            <p><strong>Resolución de la Suma de cubos:</strong>Para resolver una suma de cubos seguimos la siguiente fórmula: a³ + b³ = (a + b)(a² - ab + b²), para hacerla primero hay que sacar las raíces cúbicas de ambos términos,despues hacemos el binomio con el resulado de las raíces con el mismo signo del original, despues realizamos el trinomio con el cuadrado del primer y segundo número y para el número de en medio, multiplicamos las raíces y le asignamos el signo opuesto al orginal.</p>
         
            <p><strong>Resolución de la Diferencia de cubos:</strong> Para resolver una diferencia de cubos seguimos la siguiente fórmula: a³ - b³ = (a - b)(a² + ab + b²), para hacerla primero hay que sacar las raíces cúbicas de ambos términos,despues hacemos el binomio con el resulado de las raíces con el mismo signo del original,en este caso es negativo, despues realizamos el trinomio con el cuadrado del primer y segundo número y para el número de en medio, multiplicamos las raíces y le asignamos el signo opuesto, en este caso es positivo.</p>
    
         <p><strong>Ejemplo:</strong></p>

         <p><strong>Factoriza</strong> 125x³ - 8</p>

<ol>
    <li> <strong>Raíces cúbicas:</strong> ∛125x³ = 5x, ∛8 = 2</li>
    <li> <strong>Binomio con el mismo signo:</strong> (5x - 2)</li>
    <li> <strong>Hacemos el trinomio:</strong>
        <ul>
            <li><strong>Primera raíz al cuadrado:</strong> (5x)² = 25x²</li>
            <li> <strong>Multiplicación de las raíces con el signo opuesto:</strong> + (5x)(2) = + 10x</li>
            <li> <strong>Segunda raíz al cuadrado, Siempre positivo:</strong> + 4</li>
        </ul>
    </li>
</ol>

<p><strong>Resultado:</strong> (5x - 2)(25x² + 10x + 4)</p>

    <p><strong>Comprobación</strong></p>
<p>Multiplica de regreso (5x - 2)(25x² + 10x + 4) divide y vencerás: multiplica el trinomio por 5x y por -2</p>

<ol>
    <li> <strong>Multiplicar el trinomio por 5x:</strong>
        <ul>
            <li> 5x · 25x² = 125x³</li>
            <li> 5x · 10x = 50x²</li>
            <li> 5x · 4 = 20x</li>
        </ul>
    </li>
    <li> <strong>Multiplicar el trinomio por -2:</strong>
        <ul>
            <li> -2 · 25x² = -50x²</li>
            <li> -2 · 10x = -20x</li>
            <li> -2 · 4 = -8</li>
        </ul>
    </li>
    <li> <strong>Sumar por potencias:</strong>
        <ul>
            <li> x³: 125x³</li>
            <li> x²: 50x² - 50x² = 0</li>
            <li> x¹: 20x - 20x = 0</li>
            <li> x⁰: -8</li>
        </ul>
    </li>
</ol>

<p>Los términos de en medio se cancelan al igual que con los conjugados</p>

<p><strong>Resultado:</strong> 125x³ - 8 </p>

       <h3>Trinomios x² + bx + c </h3>
        <p><strong>Cómo reconocerlo:</strong> Para poder reconocer un trinomio de la forma x² + bx + c, debes darte cuenta primero que sea un trinomio, luego en el proceso ver si al encontrar los pares de c, esos numeros sumados den bx</p>
       
         <p><strong>Resolución:</strong>Para resolver un trinomio de la forma x² + bx + c, primero es sacar el cuadrado del primer termino, despues debes encontrar dos números que al multiplicarse los pares que su resultado nos de c, tenemos que ver si al sumarse los mismos pares nos dan de reultado bx</p>
    
       <p><strong>Ejemplo:</strong></p>

       <p><strong>Factoriza</strong> x² - 4x - 21</p>

<p><strong>Sacar la raíz cuadrada de x²:</strong> √x² = x</p>

<table>
    <tr>
        <th>Pares de 21</th>
        <th>Diferencia</th>
    </tr>
    <tr>
        <td>(1) * (21) = 21</td>
        <td> 1 - 21 = -20</td>
    </tr>
    <tr>
        <td>(3) * (7) = 21 </td>
        <td>3 - 7 = -4 </td>
    </tr>
</table>

<p>Los números son: <strong>Multiplicación:</strong> (+3) * (-7) = -21, <strong>Suma:</strong> +3 + (-7) = -4</p>

<p><strong>Resultado:</strong> (x + 3)(x - 7)</p>

<p><strong>Comprobación</strong></p>
<p>Multiplica de regreso (x + 3)(x - 7)</p>

<ol>
    <li> <strong>Multiplicar (x - 7) por x:</strong>
        <ul>
            <li> x · x = x²</li>
            <li> x · (-7) = -7x</li>
        </ul>
    </li>
    <li> <strong>Multiplicar (x - 7) por +3:</strong>
        <ul>
            <li> 3 · x = 3x</li>
            <li> 3 · (-7) = -21</li>
        </ul>
    </li>
    <li> <strong>Sumar por potencias:</strong>
        <ul>
            <li> x²: x²</li>
            <li> x¹: -7x + 3x = -4x</li>
            <li> x⁰: -21</li>
        </ul>
    </li>
</ol>

<p>Los términos de en medio se reducen: -7x + 3x = -4x, que es el término de en medio del polinomio original</p>

<p><strong>Resultado:</strong> x² - 4x - 21 </p>

       <h3>Trinomios ax² + bx + c (aspa simple)</h3>
    
       <p><strong>Cómo reconocerlo:</strong> Para poder reconocer un trinomio de la forma x² + bx + c con la resolución por aspa simple, debes darte cuenta primero que sea un trinomio, </p>
        
            <p><strong>Resolución por aspa simple:</strong> Para resolver un trinomio de la forma ax² + bx + c usando el método de aspa simple, primero es descomponer el término ax² en dos factores que se distribuyan las x, luego se buscan terminos que al muliplicarse den como resultado el término c y estos mismos terminos de manera cruzada se multiplican por los terminos de ax² y el resultado de la multiplicación de cada uno, se suma o se resta, sea el caso de los signos, den como resultado bx.</p>
    
        <p><strong>Ejemplo:</strong></p>
<p><strong>Factoriza</strong> 10x² - 11x - 6</p>

<p><strong>Descomponer:</strong> 10x² = 5x * 2x</p>

<table>
    <tr>
        <th>Pares de 6, en este caso ambos tienen signos diferentes</th>
        <th>Suma en cruz</th>
    </tr>
    <tr>
        <td>(+1) * (-6) = -6</td>
        <td>5x * (-6) + 2x * (+1) = -30x + 2x = -28x</td>
    </tr>
    <tr>
        <td>(+6) * (-1) = -6</td>
        <td>5x * (-1) + 2x * (+6) = -5x + 12x = +7x</td>
    </tr>
    <tr>
        <td>(+3) * (-2) = -6</td>
        <td>5x * (-2) + 2x * (+3) = -10x + 6x = -4x</td>
    </tr>
    <tr>
        <td>(+2) * (-3) =-6</td>
        <td>5x * (-3) + 2x * (+2) = -15x + 4x =-11x</td>
    </tr>
</table>

<p>Los números son: <strong>Multiplicación:</strong> (+2) * (-3) = -6, <strong>Suma en cruz:</strong> -15x + 4x = -11x</p>

<p><strong>Por renglón:</strong> (5x + 2) y (2x - 3)</p>

<p><strong>Resultado:</strong> (5x + 2)(2x - 3)</p>

<p><strong>Comprobación</strong></p>
    <p>Multiplicación de regreso (5x + 2)(2x - 3)</p>

<ol>
    <li> <strong>Multiplicar (2x - 3) por 5x:</strong>
        <ul>
            <li> 5x · 2x = 10x²</li>
            <li> 5x · (-3) = -15x</li>
        </ul>
    </li>
    <li> <strong>Multiplicar (2x - 3) por +2:</strong>
        <ul>
            <li> 2 · 2x = 4x</li>
            <li> 2 · (-3) = -6</li>
        </ul>
    </li>
    <li> <strong>Sumar por potencias:</strong>
        <ul>
            <li> x²: 10x²</li>
            <li> x¹: -15x + 4x = -11x</li>
            <li> x⁰: -6</li>
        </ul>
    </li>
</ol>

<p>Los términos de en medio se reducen: -15x + 4x = -11x, que es el término de en medio del polinomio original</p>

<p><strong>Resultado:</strong> 10x² - 11x - 6 </p>

<h3>Estrategia de factorización</h3>

<ol>
    <li> <strong>¿Hay factor común?</strong> Sácalo siempre primero.</li>
    <li> <strong>¿Cuántos términos quedaron?</strong>
        <ul>
            <li> <strong>2 términos:</strong>
                <ul>
                    <li> ¿Resta de dos cuadrados? = Diferencia de cuadrados </li>
                    <li> ¿Dos cubos? = Suma o diferencia de cubos </li>
                </ul>
            </li>
            <li> <strong>3 términos:</strong>
                <ul>
                    <li> ¿Extremos con raíz exacta y de en medio = doble producto? = Trinomio cuadrado perfecto </li>
                    <li> ¿Empieza con x²? = x² + bx + c </li>
                    <li> ¿Empieza con ax²? = Aspa simple </li>
                </ul>
            </li>
            <li> <strong>4 términos:</strong>
                <ul>
                    <li> ¿Se agrupan de dos en dos? = Agrupación </li>
                </ul>
            </li>
        </ul>
    </li>
    <li> <strong>¿Algún factor se puede factorizar otra vez?</strong> Repite.</li>
</ol>
</section>`;
