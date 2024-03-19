(SELECT * 
FROM entregan 
WHERE clave=1450)
UNION
(SELECT * 
FROM entregan
WHERE clave=1300);

SELECT * 
FROM entregan 
WHERE clave = 1450 OR clave = 1300;

SELECT * 
FROM entregan
WHERE clave NOT IN (SELECT clave FROM entregan WHERE clave = 1000);

SELECT * 
FROM entregan,materiales;

-- 4. Ordenamientos
SELECT P.numero, P.denominacion, E.fecha, E.cantidad 
FROM proyectos AS P, entregan AS E
WHERE P.numero = E.numero
ORDER BY P.numero ASC, E.fecha DESC;

-- 5. Operadores de cadena
-- COMODÍN (%)
SELECT * 
FROM materiales 
WHERE descripcion LIKE 'Si%';

-- Fin punto 5
SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';

-- Operadores lógicos
-- BETWEEN
SELECT Clave, RFC, Numero, Fecha, Cantidad
FROM Entregan
WHERE Fecha BETWEEN '2024-01-01' AND '2024-01-31';

-- EXISTS, IN
SELECT Clave, RFC, Numero, Fecha, Cantidad
FROM Entregan
WHERE Fecha BETWEEN '2003-01-01' AND '2005-01-31';

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
Exists ( SELECT RFC
		FROM Proveedores
		WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC );

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero BETWEEN 5000 and 5010 AND
RFC IN ( SELECT RFC FROM Proveedores 
              WHERE RazonSocial LIKE 'La%' 
              AND Entregan.RFC = Proveedores.RFC );
              
-- TOP
SELECT TOP 2 * FROM proyectos;

-- 7 Modificar estructura de tabla existente
SELECT SUM(M.precio*E.cantidad + 
((M.precio*E.cantidad)*M.Impuesto)) AS 'Importe entregas'
FROM materiales AS M, entregan AS E
WHERE M.clave = E.clave;

-- 8. Vistas
CREATE VIEW importeEntregas AS 
SELECT SUM(M.precio*E.cantidad + 
((M.precio*E.cantidad)*M.Impuesto)) AS 'Importe entregas'
FROM materiales AS M, entregan AS E
WHERE M.clave = E.clave;
SELECT * FROM importeEntregas;

CREATE VIEW rangoEntregas AS 
SELECT Clave,RFC,Numero,Fecha,Cantidad 
FROM Entregan 
WHERE Numero Between 5000 and 5010; 
SELECT * FROM rangoEntregas;

CREATE VIEW proyectosOrdenados AS
SELECT P.numero, P.denominacion, E.fecha, E.cantidad 
FROM proyectos AS P, entregan AS E
WHERE P.numero = E.numero
ORDER BY P.numero ASC, E.fecha DESC;
SELECT * FROM proyectosOrdenados;

CREATE VIEW materialesEntregados AS 
SELECT * FROM Materiales
WHERE Clave IN (SELECT Clave FROM Entregan);
SELECT * FROM materialesEntregados;

CREATE VIEW vendidos2000 AS
SELECT DISTINCT descripcion 
FROM materiales AS M, entregan AS E
WHERE M.clave = E.clave AND E.fecha
BETWEEN '2000-01-01' AND '2000-12-31';
SELECT * FROM vendidos2000;


-- 9. Ejercicios finales

SELECT M.clave, M.descripcion 
FROM materiales AS M, entregan AS E, proyectos AS P 
WHERE M.clave = E.clave AND E.numero = P.numero 
AND P.denominacion 
LIKE 'México sin ti no estamos completos';

SELECT M.clave, M.descripcion FROM materiales AS M 
JOIN entregan AS E ON E.clave = M.clave 
JOIN proveedores AS P ON P.rfc = E.rfc
WHERE P.razonsocial = 'Acme tools';

SELECT E.rfc FROM entregan AS E 
WHERE E.fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY E.rfc
HAVING AVG(E.cantidad) > 300;

SELECT E.clave, Count(*) AS 'Cuenta', SUM(cantidad) AS 
'Total entregado' FROM entregan AS E 
WHERE E.fecha IN (SELECT fecha FROM entregan
				  WHERE E.fecha BETWEEN 
				  '2000-01-01' AND '2000-12-31')
GROUP BY E.clave
ORDER BY SUM(cantidad) DESC;

SELECT E.Clave AS 'Clave de material más vendido', Count(*) AS 
'Cuenta', SUM(cantidad) FROM entregan AS E
WHERE YEAR (E.fecha) = 2001
GROUP BY E.clave
ORDER BY SUM(cantidad) DESC
LIMIT 1;

SELECT M.clave, M.descripcion 
FROM materiales AS M
WHERE M.descripcion LIKE '%ub%';

SELECT P.denominacion, SUM(M.precio*E.cantidad) AS 'Total a pagar' 
FROM proyectos AS P
JOIN entregan AS E ON E.numero = P.numero 
JOIN materiales AS M ON M.clave = E.clave
GROUP BY P.denominacion;

CREATE VIEW view1 AS 
SELECT P.denominacion, Pr.rfc, Pr.razonsocial FROM proyectos AS P
JOIN entregan AS E ON P.numero = E.numero 
JOIN proveedores AS Pr ON Pr.rfc = E.rfc
WHERE P.denominacion = 'Televisa en acción';
CREATE VIEW view2 AS 
SELECT P.rfc FROM proveedores AS P, proyectos Pr, entregan E
WHERE Pr.numero = E.numero AND E.rfc = P.rfc
AND Pr.denominacion = 'Educando en Coahuila';
SELECT * FROM view1
WHERE rfc NOT IN (SELECT * FROM view2);

-- Consulta anterior sin usar vistas
SELECT P.denominacion, Pr.rfc, Pr.razonsocial FROM proyectos AS P
JOIN entregan AS E ON P.numero = E.numero 
JOIN proveedores AS Pr ON Pr.rfc = E.rfc
WHERE P.denominacion = 'Televisa en acción'
AND NOT EXISTS (
    SELECT 1 FROM proyectos AS P2
    JOIN entregan AS E2 ON P2.numero = E2.numero 
    JOIN proveedores AS Pr2 ON Pr2.rfc = E2.rfc
    WHERE P2.denominacion = 'Educando en Coahuila'
    AND Pr2.rfc = Pr.rfc);
    
SELECT M.descripcion AS 'Descripción material', 
(M.precio*E.cantidad) AS 'Costo material' FROM materiales AS M
JOIN entregan AS E ON E.clave = M.clave 
JOIN proveedores AS P ON P.rfc = E.rfc
JOIN proyectos AS Pr ON Pr.numero = E.numero
WHERE Pr.denominacion = 'Televisa en acción'
AND P.rfc IN (SELECT P.rfc FROM proveedores AS P
			JOIN entregan AS E ON E.RFC = P.rfc
			JOIN materiales AS M ON M.clave = E.clave
			JOIN proyectos AS Pr ON Pr.numero = E.numero
			WHERE Pr.denominacion = 'Educando en Coahuila');
            
-- Consulta anterior usando NOT IN
SELECT M.descripcion AS 'Descripción material', 
(M.precio * E.cantidad) AS 'Costo material' FROM materiales AS M
JOIN entregan AS E ON E.clave = M.clave 
JOIN proveedores AS P ON P.rfc = E.rfc
JOIN proyectos AS Pr ON Pr.numero = E.numero
WHERE Pr.denominacion = 'Televisa en acción'
AND P.rfc NOT IN ( SELECT P2.rfc FROM proveedores AS P2
			JOIN entregan AS E2 ON E2.rfc = P2.rfc
			JOIN proyectos AS Pr2 ON Pr2.numero = E2.numero
			WHERE Pr2.denominacion = 'Educando en Coahuila');
    
-- Consulta anterior con EXISTS
SELECT M.descripcion AS 'Descripción material', 
(M.precio * E.cantidad) AS 'Costo material' FROM materiales AS M
JOIN entregan AS E ON E.clave = M.clave 
JOIN proveedores AS P ON P.rfc = E.rfc
JOIN proyectos AS Pr ON Pr.numero = E.numero
WHERE Pr.denominacion = 'Televisa en acción' 
AND EXISTS (SELECT 1 FROM entregan AS E2
			JOIN proyectos AS Pr2 ON Pr2.numero = E2.numero
			WHERE Pr2.denominacion = 'Educando en Coahuila'
			AND P.rfc = E2.rfc);

SELECT M.descripcion, Count(E.Clave) AS 'Cant. veces entregado', 
SUM(M.Precio*E.Cantidad) AS 'Costo entrega' FROM materiales AS M
JOIN entregan AS E ON E.clave = M.clave 
JOIN proveedores AS P ON P.rfc = E.rfc
JOIN proyectos AS Pr ON Pr.numero = E.numero
GROUP BY E.clave 
ORDER BY 'Costo entrega' DESC;

