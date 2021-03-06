
export default function sellItem(props) {
    // filter items that are selected
    const selectedItems = props.invItems.filter(item => item.isSelected)
    
    if(selectedItems.length > 0) {
        let goldVal = 0
        selectedItems.forEach(item => {
            goldVal += item.goldValue
        })
    
        // all the unselected items will now be the new invItems
        const newItems = props.invItems.filter(item => !item.isSelected)
        newItems.forEach((item, index) => { item.key = index }) // re-assign them proper keys
    
        return {
            invItems: newItems,
            currency: {
                gold: props.currency.gold + goldVal,
                diamonds: props.currency.diamonds,
                acquiredGold: null,
                acquiredDiamonds: null
            }
        }
    }
}