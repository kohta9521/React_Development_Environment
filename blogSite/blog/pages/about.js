import Hero from '../components//hero'
import Container from '../components/container'
import PostBody from '../components/post-body'
import Contact from '../components/contact'

export default function About() {
    return (
        <Container>
            <Hero 
                title="About"
                subtitle="About development activities"
            />

            <PostBody>
                <p>
                    Cubeは得意とする分野は物作りです。3次元から2次元の造形、プログラミングやデザインなど、様々な技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けていきます。
                </p>
                <h2>モノづくりで目指していること</h2>
                <p>
                    ものづくりではデータの解析からクリエイティブまで幅広いことを担当していきます。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
                </p>
                <p>
                    単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い政策をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
                </p>
                <h3>新しいことへのチャレンジ</h3>
                <p>
                    今までと違うものを作ることで愛着が湧いていきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしていきます。小さなヒントから新しいものを生み出すようなものづくりを、これからも続けていきたいです。
                </p>                
            </PostBody>

        <Contact />
        </Container>

    )
}