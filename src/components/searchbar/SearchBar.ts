import { computed, defineComponent, ref } from "vue";
import SearchResults from "@/components/search-results/SearchResults.vue";

export default defineComponent({
    name: 'SearchBar',
    components: {
        SearchResults,
    },
    setup() {

        const debounceTimeout = ref();
        const debouncedValue = ref('');

        return {
            debouncedValue,
            debounceTimeout,
            searchTerm: computed( {
                get () {
                    return debouncedValue.value
                },
                set ( val: string) {
                    //
                    if (debounceTimeout.value) clearTimeout( debounceTimeout.value );

                    debounceTimeout.value = setTimeout( () => {
                        debouncedValue.value = val;
                    }, 2000);
                }
            } )
        }
    }
})