import blogs from '../../data/blogs.json'

export default function handler(req, res) {
    let blog = ''
    for (let index = 0; index < blogs.length; index++) {
        const element = blogs[index];
        if (req.query.title === element.title) {
            blog = element
            break
        }
    }

    res.status(200).json({ blog })
}