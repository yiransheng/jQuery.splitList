# jQuery.splitList: a jQuery plugin to does what its name suggests

###Usage:
    
    $(selector).splitList(count, child_selector)
    $(selector).splitList(option)

    option = {
        count: 6,
        childSelector: 'li',
        resolveId: true,
        addWrapper: true,
        wrapperTag: 'div',
        wrapperClass: ""
    
    }


example: 
   
    $('<ul id="list" class="style-class" data-attr="a">'
      + '<li>1</li>'
      + '<li>1</li>'
      + '<li>1</li>'
      + '<li>2</li>'
      + '<li>2</li>'
      + '<li>2</li>'
      + '<li>3</li>'
      + '<li>3</li>'
      + '<li>3</li>'
      + '<li>4</li>'
    +'</ul>').splitList(3, 'li');

results:

    <div id='list'>
      <ul class="style-class" data-attr="a">
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
      <ul class="style-class" data-attr="a">
        <li>2</li>
        <li>2</li>
        <li>2</li>
      </ul>
      <ul class="style-class" data-attr="a">
        <li>3</li>
        <li>3</li>
        <li>3</li>
      </ul>
      <ul class="style-class" data-attr="a">
        <li>4</li>
      </ul>
    </div>

To disable wrapper, set `addWrapper : false`, to disable moving id around set `resolveId : false`, customize wrapper, change `wrapperTag` and `wrapperClass`.
