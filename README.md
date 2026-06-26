# Buscador de Alivio - Fitoterapia Tradicional

Plataforma web interactiva desarrollada para la gestión de catálogos y simulación de pedidos de productos herbarios tradicionales. El proyecto consolida un catálogo botánico riguroso basado en el listado oficial de Medicamentos Herbarios Tradicionales (MHT) del Ministerio de salud, aplicando conceptos de manipulación del DOM, programación funcional y validación del lado del cliente.

## Características Principales

- **Catálogo Dinámico:** Renderizado automatizado de 12 de 103 especies medicinales con fichas técnicas detalladas (nombre científico, familia, partes usadas, preparación y precauciones).

- **Módulo de Venta Sugerida:** Despliegue de packs combinados con distribución adaptativa y centrada.

- **Flujo de Carrito de Compras:** Simulación completa de adición, cálculo automatizado de totales y costos de despacho variables con opción de envío gratuito.

- **Sistema CRUD Interno:** Panel de administración local para la inserción (Create) y remoción (Delete) de productos en tiempo real.
- **Diseño Adaptativo e Interactivo:** Soporte nativo para Modo Nocturno mediante conmutación dinámica de clases.

## Cumplimiento de Requerimientos Técnicos

1. **Modificación del DOM:** Uso de selectores nativos (`document.getElementById`) y delegación de eventos para inyectar plantillas de diseño (`innerHTML`) de forma reactiva y controlar la visibilidad de elementos mediante mutación de clases (`classList.remove("oculto")`).

2. **Validación de Formularios:** Interrupción del comportamiento de envío por defecto (`e.preventDefault()`), validación por tipografía de datos mediante Expresiones Regulares (Regex para Email y Teléfono chileno de 9 dígitos) y entrega de retroalimentación visual directa al usuario a través del DOM en etiquetas `<small>`.

3. **Uso de Arreglos y Objetos:** Estructuración de datos en Arreglos de Objetos nativos. Gestión de colecciones mediante métodos declarativos avanzados de JavaScript como `.filter()` (búsqueda y eliminación), `.find()` (selección específica), `.push()` (adición de ítems) y `.reduce()` (cómputo de totales numéricos).

4. **Organización mediante Funciones:** Arquitectura modular estructurada en funciones reutilizables con responsabilidades únicas e independientes.

5. **Calidad del Código:** Código fuente limpio, alineado mediante buenas prácticas de legibilidad y completamente documentado con comentarios técnicos aclaratorios.

## Declaración de Uso e Integración de Inteligencia Artificial

En conformidad con los criterios de evaluación del ramo, este proyecto integró Inteligencia Artificial (Gemini) como un **asistente avanzado de co-programación (Copilot)**. La interacción con la IA se realizó bajo un modelo de refinamiento iterativo en las siguientes áreas específicas:

- **Resolución de Bugs Lógicos:** Diagnóstico y corrección de un error crítico de tipado (`$NaN`) en la función encargada de computar el precio de los packs combinados, originado por la lectura de propiedades de objetos no estructurados.

- **Optimización de UI/UX (CSS):** Migración de una grilla estática en *CSS Grid* hacia una distribución flexible en *Flexbox* (`justify-content: center`), permitiendo el centrado armónico de tarjetas "huérfanas" en la interfaz cuando los elementos del catálogo son impares.

- **Seguridad en Validaciones:** Apoyo en el diseño de máscaras de expresiones regulares (Regex) del lado del cliente para mitigar el ingreso de datos corruptos en el formulario de despacho.

- **Estructuración de Datos:** Consolidación de los esquemas de objetos JSON locales, unificando la maquetación de la landing page original con las descripciones técnicas procedentes del libro MHT 2010.

## Autor
* **Marilú Villagra** - Desarrolladora del proyecto.
