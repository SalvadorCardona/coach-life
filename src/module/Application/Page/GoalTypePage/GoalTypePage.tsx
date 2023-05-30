import { GoalTypeTableComponent } from "@/module/Application/Page/GoalTypePage/Component/GoalTypeTableComponent.tsx"
import { useGoalTypeStore } from "@/module/GoalType/Application/GoalTypeStore.ts"
import {
  Box,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react"
import { GoalTypeFormComponent } from "@/module/GoalType/Component/GoalTypeFormComponent.tsx"
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts"
import { GoalObjectiveFormComponent } from "@/module/GoalObjective/Component/GoalObjectiveFormComponent.tsx"
import { useState } from "react"
import { useGoalObjectiveStore } from "@/module/GoalObjective/Application/GoalObjectiveStore.ts"

export function GoalTypePage() {
  const goalTypesStore = useGoalTypeStore()
  const goalObjectivesStore = useGoalObjectiveStore()
  const [goalType, setGoalType] = useState<GoalTypeInterface | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const addObjective = (goalType: GoalTypeInterface): void => {
    setGoalType(goalType)
    onOpen()
  }

  return (
    <>
      <Flex>
        <Box mr={5}>
          <GoalTypeTableComponent
            removeGoalType={goalTypesStore.removeGoalType}
            updateGoalType={goalTypesStore.updateGoalType}
            goalTypes={goalTypesStore.goalTypes}
            openModal={addObjective}
            goalObjectives={goalObjectivesStore.goalObjectives}
          />
        </Box>
        <Box>
          <GoalTypeFormComponent updateGoalType={goalTypesStore.updateGoalType} />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <GoalObjectiveFormComponent
            {...{
              goalType: goalType as GoalTypeInterface,
              addGoalObjective: goalObjectivesStore.updateGoalObjective,
              goalTypes: goalTypesStore.goalTypes,
            }}
          ></GoalObjectiveFormComponent>
        </ModalContent>
      </Modal>
    </>
  )
}
