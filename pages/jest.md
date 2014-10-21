###Jest och kursen

[Jest](http://facebook.github.io/jest/) är ett testramverk byggt på [Jasmine](http://jasmine.github.io/), och är specialanpassat för att kunna testa React-komponenter.

I kursen är det obligatoriskt att installera Jest och integrera det i projektet, men det är sedan frivilligt huruvida du använder testsviten och bygger nya test under projektets gång. Om du väljer att bygga test så finns möjlighet att tjäna poäng på dem även i kursen [Mjukvarutestning](https://coursepress.lnu.se/kurs/mjukvarutestning/) som går parallellt - prata med Daniel och se vilka möjligheter som finns!

Det är också frivilligt exakt HUR du integrerar Jest - förslaget nedan kan innebära [långsam exekvering av testen](https://github.com/facebook/jest/issues/116), och de underliggande biblioteken håller på att förändras i skrivande stund.

###Förslag på integrering

Standard för Jest är att hantera test i en underkatalog vid namn `__tests__`, så skapa den. Skapa i den undermapparna `spec`, där själva testfilerna ska läggas, och `support`. Skapa i den sistnämnda filen `preprocessor.js` med följande innehåll:

<pre><code><span class="hljs-keyword">var</span> ReactTools = <span class="hljs-built_in">require</span>(<span class="hljs-string">'react-tools'</span>);
module.exports = {
  process: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(src)</span> {</span>
    <span class="hljs-keyword">return</span> ReactTools.transform(src);
  }
};
</code></pre>

Denna fil kommer ta hand om att kompilera jsx-kod för testens räkning. 

Skapa nu följande task i gulp-filen:

<pre><code><span class="hljs-keyword">var</span> jest = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-jest'</span>);

gulp.task(<span class="hljs-string">'test'</span>,<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
    <span class="hljs-keyword">return</span> gulp.src(<span class="hljs-string">'__tests__'</span>).pipe(jest({
      testDirectoryName: <span class="hljs-string">"spec"</span>,
      scriptPreprocessor: <span class="hljs-string">'./support/preprocessor.js'</span>,
      unmockedModulePathPatterns: [<span class="hljs-string">'node_modules/react'</span>],
      testPathIgnorePatterns: [
        <span class="hljs-string">"node_modules"</span>,
        <span class="hljs-string">"./support"</span>
      ]
    }));
});
</code></pre>

Lägg till både `gulp-jest` och `react-tools` (från `preprocessor`-filen) i package.json som dev-dependencies. Glöm inte att därefter köra `npm install` i terminalen för att ladda ned de nya beroendena till `node_modules`.

För att testa att allting fungerar som det ska, och ha något att utgå ifrån när vi skriver egna test, lägger vi nu in en exempelkomponent och testar den. Skapa `src/components/testexamplecomponent.js` (exakt sökväg såklart valfri) med följande innehåll (denna är stulen från Jests tutorial):

<pre><code><span class="hljs-comment">/** @jsx React.DOM */</span>
<span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">'react/addons'</span>);
<span class="hljs-keyword">var</span> CheckboxWithLabel = React.createClass({
  getInitialState: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    <span class="hljs-keyword">return</span> { isChecked: <span class="hljs-literal">false</span> };
  },
  onChange: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    <span class="hljs-keyword">this</span>.setState({isChecked: !<span class="hljs-keyword">this</span>.state.isChecked});
  },
  render: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    <span class="hljs-keyword">return</span> (
      {<span class="hljs-keyword">this</span>.state.isChecked ? <span class="hljs-keyword">this</span>.props.labelOn : <span class="hljs-keyword">this</span>.props.labelOff}
    );
  }
});
module.exports = CheckboxWithLabel;
</code></pre>

Filen definierar en checkbox med en label som ändrar text när rutan kryssas i eller ur. Skapa nu `__tests__/spec/testexamplecomponent-spec.js`:

<pre><code><span class="hljs-javadoc">/** <span class="hljs-javadoctag">@jsx</span> React.DOM */</span>
<span class="hljs-keyword">var</span> path = <span class="hljs-string">'../../src/components/testexamplecomponent.js'</span>;

jest.dontMock(path);
describe(<span class="hljs-string">'CheckboxWithLabel'</span>, function() {
  it(<span class="hljs-string">'changes the text after click'</span>, function() {
    <span class="hljs-keyword">var</span> React = require(<span class="hljs-string">'react/addons'</span>);
    <span class="hljs-keyword">var</span> CheckboxWithLabel = require(path);
    <span class="hljs-keyword">var</span> TestUtils = React.addons.TestUtils;

    <span class="hljs-comment">// Render a checkbox with label in the document</span>
    <span class="hljs-keyword">var</span> checkbox = TestUtils.renderIntoDocument();

    <span class="hljs-comment">// Verify that it's Off by default</span>
    <span class="hljs-keyword">var</span> label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, <span class="hljs-string">'label'</span>);
    expect(label.getDOMNode().textContent).toEqual(<span class="hljs-string">'Off'</span>);

    <span class="hljs-comment">// Simulate a click and verify that it is now On</span>
    <span class="hljs-keyword">var</span> input = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, <span class="hljs-string">'input'</span>);
    TestUtils.Simulate.change(input);
    expect(label.getDOMNode().textContent).toEqual(<span class="hljs-string">'On'</span>);
  });
});
</code></pre>

Testen använder Jests verktyg för att smidigt kunna testa att komponenten fungerar som förväntat. 

För att kontrollera att detta fungerar som förväntat, kör `gulp test` i terminalen!


###Resurser

*    Jest har en [mycket bra tutorial](http://facebook.github.io/jest/docs/tutorial.html#content) med exempel på hur man testar Reactkomponenter, jQuery-bapp, etc.
*    För allmän JavaScripttestning så är [Christian Johansens](http://cjohansen.no/) bok [Test-Driven JavaScript Development](http://tddjs.com/) från 2010 fortfarande den absolut bästa på marknaden. Kan läsas gratis av LNU-studenter [här](http://proquestcombo.safaribooksonline.com.proxy.lnu.se/book/programming/javascript/9780321684097).


