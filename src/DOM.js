/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    const bodyLink = document.body;
    for (let i = 0; i < count; i++) {
        const newTag = document.createElement(tag);
        newTag.innerHTML = content;
        bodyLink.append(newTag);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level, itemLevel = 1) {
    const tree = document.createElement('div');
    const itemClass = 'item_' + itemLevel;
    tree.setAttribute('class', itemClass);

    if (itemLevel < level) {
        const nextLevel = itemLevel + 1;
        for (let i = 0; i < childrenCount; i++) {
            tree.appendChild(generateTree(childrenCount, level, nextLevel));
        }
    }

    return tree;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const tree = generateTree(2, 3);
    const secondLvl = tree.querySelectorAll('.item_2');
    for (let el of secondLvl) {
        const replace = document.createElement('section');
        replace.setAttribute('class', 'item_2');
        replace.innerHTML = el.innerHTML;
        tree.replaceChild(replace, el);
    }
    return tree;
}
