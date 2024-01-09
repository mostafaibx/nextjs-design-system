import Button from './components/ui/Button'

export default function Home() {
  return (
    <main className='min-h-screen p-24 flex justify-center'>
      <Button>Button1</Button>
      <Button
        className='mx-4'
        variant={'secondary'}
        fullWidth={false}
      >
        Button1
      </Button>
      <Button
        variant={'danger'}
        className='mx-4'
      >
        Button1
      </Button>
      <Button
        variant={'warning'}
        className='mx-4'
      >
        Button1
      </Button>
      <Button variant={'success'}>Button1</Button>
    </main>
  )
}
