import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [currentTab, setCurrentTab] = useState<'all' | 'pending' | 'completed'>(
    'all'
  )
  const activeClass = `border-gray-700 text-white bg-gray-700`
  const inactiveClass = `border-gray-200 text-gray-700 `
  const baseClass = `inline-flex h-11 items-center justify-center gap-2 rounded-full border px-6 text-center text-sm font-bold leading-tight py-3`
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          <Tabs.Root
            onValueChange={(value: string) => {
              setCurrentTab(value as 'all' | 'pending' | 'completed')
            }}
            className="TabsRoot "
            defaultValue="all"
          >
            <Tabs.List className="inline-flex h-11 items-center justify-start gap-2">
              <Tabs.Trigger
                className={` ${baseClass} ${
                  currentTab === 'all' ? activeClass : inactiveClass
                } `}
                value="all"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                className={` ${baseClass} ${
                  currentTab === 'pending' ? activeClass : inactiveClass
                } `}
                value="pending"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`${baseClass} ${
                  currentTab === 'completed' ? activeClass : inactiveClass
                } `}
                value="completed"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
        <div className="pt-10">
          <TodoList tab={currentTab} />
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
