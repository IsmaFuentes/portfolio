function KayakingPage() {
  /**
   * Caso de estudio – Análisis de datos aplicados al piragüismo
   *
   * La Federación Balear de Piragüismo disponía de una aplicación de escritorio para el análisis de datos GPS
   * desarrollada inicialmente en MATLAB. Aunque funcional, esta primera versión presentaba importantes
   * problemas de rendimiento, usabilidad y mantenibilidad, lo que dificultaba su evolución y uso diario.
   *
   * Mi rol en el proyecto fue el de desarrollador principal, encargándome de la reescritura completa de la
   * aplicación utilizando tecnologías modernas y aplicando buenas prácticas de desarrollo de software.
   *
   * Además de mejorar notablemente el rendimiento y la experiencia de usuario, se incorporaron nuevas
   * funcionalidades clave:
   * - Detección inteligente de zonas de esfuerzo
   * - Ajuste preciso del recorte de datos para mejorar la calidad del análisis
   * - Integración directa con la web de la federación para la subida de ficheros CSV procesados
   * - Generación de informes detallados por sesión
   *
   * El resultado fue una aplicación más rápida, intuitiva y fácil de mantener, que ha sido muy bien recibida
   * por entrenadores y usuarios, contribuyendo a mejorar el análisis de datos GPS en el ámbito del piragüismo
   * en las Islas Baleares.
   *
   * Optimizacion de rendimiento:
   * Para garantizar una visualización fluida con archivos CSV de gran tamaño (+100 MB), se optó por una estrategia de reducción de datos orientada a la visualización.
   * - En lugar de representar todos los puntos muestreados cada 10 ms, se generó una estructura intermedia (PlotPoints) con un muestreo de 100 ms, manteniendo la referencia al índice real de los datos brutos.
   *   Esto permitió reducir significativamente la carga de renderizado sin perder precisión en el análisis ni trazabilidad sobre el dataset original.
   *
   * Accesibilidad y usabilidad:
   * - Incluye modos oscuro y claro para adaptarse a las preferencias de los usuarios.
   * - La interfaz se diseñó para ser intuitiva y fácil de usar, con controles claros para la selección de archivos, ajuste de parámetros y visualización de resultados.
   *
   * Tecnologías utilizadas:
   * - C# y WPF (.NET 10) para la interfaz de usuario
   * - ScottPlot para la visualización de datos de alto rendimiento
   * - WebView2 para la generación de informes
   * - CsvHelper para el procesamiento de archivos CSV
   */

  return (
    <div>this is my personal kayaking project in collaboration with FBP!</div>
  );
}

export default KayakingPage;
