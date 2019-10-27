import App from './index.svelte'
import { render } from '@testing-library/svelte'

describe('App', () => {
    it('should render the app', () => {
        const { container, getAllByText } = render(App)

        expect(container.getElementsByClassName('layout').length).toBe(1)
        expect(container.getElementsByClassName('title').length).toBe(1)

        expect(container).toMatchSnapshot()
    })
})
