import { Task, Milestone, Project, TimelineItem } from './types';

/**
 * Classe para gerenciar projetos
 */
export class ProjectManager {
	private projects: Map<string, Project> = new Map();

	/**
	 * Adiciona ou atualiza um projeto
	 */
	saveProject(project: Project): void {
		project.updatedAt = new Date().toISOString();
		this.projects.set(project.projectId, project);
	}

	/**
	 * Obtém um projeto pelo ID
	 */
	getProject(projectId: string): Project | undefined {
		return this.projects.get(projectId);
	}

	/**
	 * Lista todos os projetos
	 */
	getProjects(): Project[] {
		return Array.from(this.projects.values());
	}

	/**
	 * Remove um projeto
	 */
	deleteProject(projectId: string): boolean {
		return this.projects.delete(projectId);
	}

	/**
	 * Adiciona um item a um projeto
	 */
	addItem(projectId: string, item: Task | Milestone): boolean {
		const project = this.projects.get(projectId);
		if (!project) return false;

		project.items.push(item);
		project.updatedAt = new Date().toISOString();
		return true;
	}

	/**
	 * Remove um item de um projeto
	 */
	removeItem(projectId: string, itemId: string): boolean {
		const project = this.projects.get(projectId);
		if (!project) return false;

		const index = project.items.findIndex(item => item.id === itemId);
		if (index === -1) return false;

		project.items.splice(index, 1);
		project.updatedAt = new Date().toISOString();
		return true;
	}

	/**
	 * Atualiza um item em um projeto
	 */
	updateItem(projectId: string, itemId: string, updates: Partial<Task | Milestone>): boolean {
		const project = this.projects.get(projectId);
		if (!project) return false;

		const item = project.items.find(i => i.id === itemId);
		if (!item) return false;

		Object.assign(item, updates);
		project.updatedAt = new Date().toISOString();
		return true;
	}

	/**
	 * Obtém um item específico
	 */
	getItem(projectId: string, itemId: string): TimelineItem | undefined {
		const project = this.projects.get(projectId);
		if (!project) return undefined;

		return project.items.find(item => item.id === itemId);
	}

	/**
	 * Exporta projeto para JSON
	 */
	exportProject(projectId: string): string | null {
		const project = this.projects.get(projectId);
		if (!project) return null;

		return JSON.stringify(project, null, 2);
	}

	/**
	 * Importa projeto de JSON
	 */
	importProject(json: string): boolean {
		try {
			const project = JSON.parse(json) as Project;
			this.saveProject(project);
			return true;
		} catch (error) {
			console.error('Error importing project:', error);
			return false;
		}
	}

	/**
	 * Valida dependências circulares
	 */
	hasCircularDependency(projectId: string, taskId: string, dependencyId: string): boolean {
		const project = this.projects.get(projectId);
		if (!project) return false;

		const visited = new Set<string>();
		const recursionStack = new Set<string>();

		const detectCycle = (currentId: string): boolean => {
			visited.add(currentId);
			recursionStack.add(currentId);

			const task = project.items.find(item => item.id === currentId && item.type === 'task') as Task;
			if (!task) return false;

			for (const depId of task.dependencies) {
				if (depId === dependencyId && currentId === taskId) {
					return true;
				}

				if (!visited.has(depId)) {
					if (detectCycle(depId)) return true;
				} else if (recursionStack.has(depId)) {
					return true;
				}
			}

			recursionStack.delete(currentId);
			return false;
		};

		return detectCycle(taskId);
	}

	/**
	 * Serializa todos os projetos para JSON
	 */
	serializeProjects(): string {
		const projectsArray = Array.from(this.projects.values());
		return JSON.stringify(projectsArray, null, 2);
	}

	/**
	 * Carrega projetos de JSON serializado
	 */
	loadProjects(json: string): void {
		try {
			const projectsArray = JSON.parse(json) as Project[];
			this.projects.clear();
			projectsArray.forEach(project => {
				this.projects.set(project.projectId, project);
			});
		} catch (error) {
			console.error('Error loading projects:', error);
		}
	}

	/**
	 * Limpa todos os projetos
	 */
	clearProjects(): void {
		this.projects.clear();
	}
}
