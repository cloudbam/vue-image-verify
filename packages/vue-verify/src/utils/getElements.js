export function getDefalutElementsStyle(verifyInfo) {
     document.getElementsByClassName('verified')[0].style.left = `${ verifyInfo.puzzleGapX}px`;
     document.getElementsByClassName('verified')[0].style.top = `${ verifyInfo.puzzleGapY}px`;
     document.getElementsByClassName('handler')[0].style.left = `${ verifyInfo.puzzleGapX}px`;
}