import {render} from '@testing-library/react'
import InfiniteScroller from '../../components/InfiniteScroller';
import {QueryClient, QueryClientProvider,} from 'react-query'

const mockApiCallback = async () => {
    return [{item: Math.random()}];
};
const queryClient = new QueryClient();
const wrapper = ({children}) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

/**
 * https://stackoverflow.com/a/58651649/6593949
 *
 * Utility function that mocks the `IntersectionObserver` API. Necessary for components that rely
 * on it, otherwise the tests will crash. Recommended to execute inside `beforeEach`.
 * @param intersectionObserverMock - Parameter that is sent to the `Object.defineProperty`
 * overwrite method. `jest.fn()` mock functions can be passed here if the goal is to not only
 * mock the intersection observer, but its methods.
 */
export function setupIntersectionObserverMock({
                                                  root = null,
                                                  rootMargin = '',
                                                  thresholds = [],
                                                  disconnect = () => null,
                                                  observe = () => null,
                                                  takeRecords = () => [],
                                                  unobserve = () => null,
                                              } = {}) {
    class MockIntersectionObserver {
        constructor() {
            this.root = root;
            this.rootMargin = rootMargin;
            this.thresholds = thresholds;
            this.disconnect = disconnect;
            this.observe = observe;
            this.takeRecords = takeRecords;
            this.unobserve = unobserve;
        }
    }

    Object.defineProperty(window, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: MockIntersectionObserver
    });

    Object.defineProperty(global, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: MockIntersectionObserver
    });
}

describe('Testing Infinite Scroller component', function () {
    beforeEach(()=>{
        setupIntersectionObserverMock();
    })

    it('renders Artist component', () => {
        const {container} = render(
            <InfiniteScroller
                queryKey={"test"}
                apiCallback={mockApiCallback}
                lastPageController={() => false}
                childrenRenderer={(data) => data ? data.pages.map(item => (<div>item</div>)) : null}
            />,
            {wrapper}
        )
        expect(container).toMatchSnapshot()
    })
});